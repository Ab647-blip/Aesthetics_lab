const { execFileSync } = require("child_process");
const path = require("path");
const ffmpeg = require("ffmpeg-static");

const root = path.resolve(__dirname, "..");
const font = "C\\\\:/Windows/Fonts/segoeuib.ttf";
const fontReg = "C\\\\:/Windows/Fonts/segoeui.ttf";

const laser = path.join(root, "public/media/laser-treatment.png");
const before = path.join(root, "public/results/spectra-peel-before.jpg");
const after = path.join(root, "public/results/spectra-peel-after.jpg");
const out = path.join(root, "public/media/spectra-peel-commercial.mp4");

const prep =
  "scale=720:900:force_original_aspect_ratio=increase,crop=720:900,setsar=1,fps=30,format=yuv420p";

const filter = [
  `[0:v]${prep},drawbox=y=ih-160:color=black@0.5:width=iw:height=160:t=fill,drawtext=fontfile=${font}:text='SPECTRA PEEL LASER':fontsize=30:fontcolor=white:x=(w-text_w)/2:y=h-110,drawtext=fontfile=${fontReg}:text='In-clinic laser renewal':fontsize=18:fontcolor=white@0.92:x=(w-text_w)/2:y=h-65[v0]`,
  `[1:v]${prep},drawbox=x=24:y=28:w=120:h=40:color=black@0.7:t=fill,drawtext=fontfile=${font}:text='BEFORE':fontsize=18:fontcolor=white:x=40:y=38[v1]`,
  `[2:v]${prep},drawbox=x=24:y=28:w=110:h=40:color=0x5c6b5a@0.92:t=fill,drawtext=fontfile=${font}:text='AFTER':fontsize=18:fontcolor=white:x=44:y=38[v2]`,
  `[3:v]${prep},drawbox=y=ih-190:color=black@0.55:width=iw:height=190:t=fill,drawtext=fontfile=${font}:text='Clearer, fresher skin':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-145,drawtext=fontfile=${fontReg}:text='From Rs. 7,500  |  Aesthetics Labs':fontsize=17:fontcolor=white@0.92:x=(w-text_w)/2:y=h-95,drawtext=fontfile=${fontReg}:text='FDA & CE approved USA machines':fontsize=15:fontcolor=white@0.85:x=(w-text_w)/2:y=h-58[v3]`,
  `[v0][v1][v2][v3]concat=n=4:v=1:a=0[outv]`,
].join(";");

execFileSync(
  ffmpeg,
  [
    "-y",
    "-loop",
    "1",
    "-t",
    "3.5",
    "-i",
    laser,
    "-loop",
    "1",
    "-t",
    "2.8",
    "-i",
    before,
    "-loop",
    "1",
    "-t",
    "2.8",
    "-i",
    after,
    "-loop",
    "1",
    "-t",
    "3.4",
    "-i",
    laser,
    "-filter_complex",
    filter,
    "-map",
    "[outv]",
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    "20",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    out,
  ],
  { stdio: "inherit" },
);

console.log("Wrote", out);
