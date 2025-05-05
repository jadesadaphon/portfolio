// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressLogo from "./assets/tech_logo/expressjs.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import mySqlLogo from "./assets/tech_logo/mysql.png";
import javaLogo from "./assets/tech_logo/java.png";
import kotlinLogo from "./assets/tech_logo/kotlin.png";
import pythonLogo from "./assets/tech_logo/python.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import androidStudioLogo from "./assets/tech_logo/AndroidStudio.png";
import sqlServerLogo from "./assets/tech_logo/sqlserver.png";
import ssmsLogo from "./assets/tech_logo/ssms.png";
import sqlLogo from "./assets/tech_logo/sql.png";
import xmlLogo from "./assets/tech_logo/xml.png";
import TKinterLogo from "./assets/tech_logo/TKinter.png";
import ivms4200Logo from "./assets/tech_logo/ivms4200.png";
import sadpLogo from "./assets/tech_logo/sadp.png";
import wordLogo from "./assets/tech_logo/word.png";
import excelLogo from "./assets/tech_logo/excel.png";
import powerPointLogo from "./assets/tech_logo/powerpoint.png";
import outLookLogo from "./assets/tech_logo/outlook.png";
import visioLogo from "./assets/tech_logo/visio.png";
import sonyVegasLogo from "./assets/tech_logo/sonyvegas.png";
import photoshopLogo from "./assets/tech_logo/photoshop.png";
import reactLogo from "./assets/tech_logo/react.png";
import sublimeTextLogo from "./assets/tech_logo/sublimetext.png";
import xamppLogo from "./assets/tech_logo/xampp.png";

// Experience Section Logo's
import xprIdhomeLogo from "./assets/company_logo/idhome.jpg";
import xprAndroidLogo from "./assets/company_logo/android.png";
import xprPythonLogo from "./assets/company_logo/python.png";

// Education Section Logo's
import srruLogo from "./assets/education_logo/SRRU.png";
import nmwLogo from "./assets/education_logo/nmw.png";
import nk2Logo from "./assets/education_logo/nk2.png";

// Project Section Logo's
import RESTAPIsNodejsExpressLogo from "./assets/work_logo/REST_APIs_Nodejs_Express.png";
import IDHomeAndroidAppLogo from "./assets/work_logo/IDHome_Android_App.png";
import GLOBOTAndroidAppLogo from "./assets/work_logo/GLOBOT_Android_App.png";
import SACCustomerDisplayLogo from "./assets/work_logo/SAC_Customer_Display.png";
import BackendAPISystemPythonFlaskLogo from "./assets/work_logo/Backend_API_System_PythonFlask.png";
import AdminToolsPythonCustomTkinterRequestsLogo from "./assets/work_logo/Admin_Tools_PythonCustomTkinterRequests.png";
import GLOBOTDesktopAppLogo from "./assets/work_logo/GLOBOTDesktopApp.png";


export const SkillsInfo = [
  {
    title: "Frontend Developer",
    skills: [
      { name: "HTML", logo: htmlLogo, level: 4 },
      { name: "CSS", logo: cssLogo, level: 4 },
      { name: "Javascript", logo: javascriptLogo, level: 4 },
      { name: "XML", logo: xmlLogo, level: 5 },
      { name: "TKinter", logo: TKinterLogo, level: 5 },
      // { name: 'React.js', logo: reactLogo, level: 4 }
    ],
  },
  {
    title: "Backend Developer",
    skills: [
      { name: "SQLServer", logo: sqlServerLogo, level: 5 },
      { name: "Firebase", logo: firebaseLogo, level: 5 },
      // { name: 'Node.js', logo: nodejsLogo, level: 4 },
      // { name: 'Express.js', logo: expressLogo, level: 4 },
      // { name: 'MySql', logo: mySqlLogo, level: 4 }
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Kotlin", logo: kotlinLogo, level: 5 },
      { name: "Java", logo: javaLogo, level: 4 },
      { name: "Python", logo: pythonLogo, level: 5 },
    ],
  },
  {
    title: "Programming Tools",
    skills: [
      { name: "VS Code", logo: vscodeLogo, level: 5 },
      { name: "Sublime Text", logo: sublimeTextLogo, level: 4 },
      { name: "Android Studio", logo: androidStudioLogo, level: 5 },
      { name: "SSMS", logo: ssmsLogo, level: 4 },
      { name: "Postman", logo: postmanLogo, level: 5 },
      { name: "Xampp", logo: xamppLogo, level: 4 },
    ],
  },
  {
    title: "CCTV",
    skills: [
      { name: "iVMS-4200", logo: ivms4200Logo, level: 5 },
      { name: "SADP", logo: sadpLogo, level: 5 },
    ],
  },
  {
    title: "Program",
    skills: [
      { name: "Word", logo: wordLogo, level: 5 },
      { name: "Excel", logo: excelLogo, level: 5 },
      { name: "Power Point", logo: powerPointLogo, level: 5 },
      { name: "Out Look", logo: outLookLogo, level: 4 },
      { name: "Visio", logo: visioLogo, level: 4 },
      { name: "Sony Vegas", logo: sonyVegasLogo, level: 5 },
      { name: "Photoshop", logo: photoshopLogo, level: 5 },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: xprIdhomeLogo,
    role: "IT Support",
    companyKey: "componentExperience.id1.company",
    dateKey: "componentExperience.id1.date",
    descKey: "componentExperience.id1.desc",
    skills: [
      "CCTV Maintenance",
      "Active Directory",
      "SQL Server",
      "IT Troubleshooting",
      "Server Maintenance",
    ],
  },
  {
    id: 1,
    img: xprAndroidLogo,
    role: "Android Apps Developer",
    companyKey: "componentExperience.id2.company",
    dateKey: "componentExperience.id2.date",
    descKey: "componentExperience.id2.desc",
    skills: [
      "Kotlin",
      "Java",
      "XML",
      "C++",
      "NCNN",
      "YOLO",
      "JNI",
      "Firebase",
      "Android Development",
    ],
  },
  {
    id: 2,
    img: xprPythonLogo,
    role: "Python Developer",
    companyKey: "componentExperience.id3.company",
    dateKey: "componentExperience.id3.date",
    descKey: "componentExperience.id3.desc",
    skills: [
      "Python",
      "YOLO",
      "ONNX",
      "OpenCV",
      "Object Detection",
      "ADB",
      "Scrcpy",
      "Firebase",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: srruLogo,
    school: "componentEducation.id1.school",
    date: "componentEducation.id1.date",
    grade: "3.62",
    desc: "componentEducation.id1.desc",
    degree: "componentEducation.id1.degree",
  },
  {
    id: 1,
    img: nmwLogo,
    school: "componentEducation.id2.school",
    date: "componentEducation.id2.date",
    grade: "2.79",
    desc: "componentEducation.id2.desc",
    degree: "componentEducation.id2.degree",
  },
  {
    id: 2,
    img: nmwLogo,
    school: "componentEducation.id3.school",
    date: "componentEducation.id3.date",
    grade: "3.27",
    desc: "componentEducation.id3.desc",
    degree: "componentEducation.id3.degree",
  },
  {
    id: 3,
    img: nk2Logo,
    school: "componentEducation.id4.school",
    date: "componentEducation.id4.date",
    grade: "-",
    desc: "componentEducation.id4.desc",
    degree: "componentEducation.id4.degree",
  },
];

export const projects = [
  {
    id: 0,
    title: "SAC Customer Display",
    description: `Desktop Application พัฒนาโดยใช้ภาษา Python ช่วยเป็นส่วนเสริมให้กับโปรแกรม SmileAccountCharming (โปรแกรมขายบริษัทไอดีโฮม) \n
    คุณสมบัติของโปรแกรม\n
    ✅ แสดงข้อมูลสินค้า\n
    ✅ Generator QR Code payment แบบ ล็อคยอดโอน`,
    image: SACCustomerDisplayLogo,
    tags: ["Python", "OpenCV", "TKinter"],
    github: "https://github.com/jadesadaphon/SAC-Customer-Display.git",
    webapp: "",
  },
  {
    id: 1,
    title: "IDHome Android App",
    description: `Android Application พัฒนาโดยใช้ภาษา Kotlin เป้าหมายของโปรเจคคือ อํานวยความสะดวกในการตรวจสอบข้อมูลสินค้าให้กับหน่วยงานใน บริษัทไอดีโฮม \n
    คุณสมบัติของโปรแกรม\n
    ✅ แสดงรายละเอียดสินค้า สต๊อก/ค้างรับ `,
    image: IDHomeAndroidAppLogo,
    tags: [
      "Kotlin", 
      "Python Flask", 
      "Microsoft SQL Server"
    ],
    github: "https://github.com/jadesadaphon/IDHome-Android-App",
    webapp: "",
  },
  {
    id: 2,
    title: "REST APIs Node.js Express",
    description:
      "(อยู่ระหว่างการพัฒนา) โปรเจกต์ Backend API ที่พัฒนาโดยใช้ Node.js และ Express โดยเชื่อมต่อกับฐานข้อมูล SQL Server มีเป้าหมายเพื่อให้บริการ API สำหรับ Web Application ซึ่ง API ที่พร้อมใช้งานในขณะนี้ ได้แก่ สมัครสมาชิก (Register), เข้าสู่ระบบ (Login), ออกจากระบบ (Logout), ระบบผู้ดูแล (Admin)",
    image: RESTAPIsNodejsExpressLogo,
    tags: [
      "JavaScript",
      "Microsoft SQL Server",
      "json web token",
    ],
    github: "https://github.com/jadesadaphon/REST-APIs-Node.js-Express.git",
    webapp: "",
  },
  {
    id: 3,
    title: "GLOBOT Android App",
    description:
      `Android Application พัฒนาโดยใช้ภาษา Kotlin, C, C++ สำหรับ Automate อุปกรณ์แอนดรอยด์ เป้าหมายของโปรเจคคือ การทำระบบอัตโนมัติช่วยในการ ซื้อ-จอง สลากฯกินแบ่งรัฐบาล ของผู้มีสิทธิ์(ตัวแทนจำหน่าย) ผ่านแอปพลิเคชันเป๋าตัง \n 
      หลักการทำงานเบื้องต้นของโปรแกรม \n
      ✅ จับภาพหน้า\n
      ✅ ตรวจจับวัตถุบนภาพ\n
      ✅ ทัชสกรีนตำแหน่งที่พบวัตถุ`,
    image: GLOBOTAndroidAppLogo,
    tags: [
      "Kotlin",
      "C",
      "C++",
      "Yolo NCNN",
      "Firebase",
    ],
    github: "https://github.com/jadesadaphon/GLOBOT-Android-App",
    webapp: "",
  },
  {
    id: 4,
    title: "GLOBOT Desktop App",
    description:
      `Desktop Application พัฒนาโดยใช้ภาษา Python สำหรับ Automate อุปกรณ์แอนดรอยด์ ผ่าน ADB เป้าหมายของโปรเจคคือ การทำระบบอัตโนมัติช่วยในการ ซื้อ-จอง สลากฯกินแบ่งรัฐบาล ของผู้มีสิทธิ์(ตัวแทนจำหน่าย) ผ่านแอปพลิเคชันเป๋าตัง \n
      การทำงานของโปรแกรม \n
      ✅ จับภาพหน้าจออุปกรณ์แอนดรอยด์ 
      ✅ ตรวจจับวัตถุจากภาพ
      ✅ ทัชสกรีนตำแหน่งที่พบวัตถุ
      \n`,
    image: GLOBOTDesktopAppLogo,
    tags: [
      "Python",
      "Yolo ONNX ",
      "OpenCV",
      "CustomTkinter"
    ],
    github: "https://github.com/jadesadaphon/GLOBOT-Desktop-App.git",
    webapp: "",
  },
  {
    id: 5,
    title: "Admin Tools (Python + CustomTkinter + Requests)",
    description: `เครื่องมือ Admin สำหรับจัดการข้อมูลผู้ใช้ พัฒนาด้วยภาษา Python โดยใช้ CustomTkinter Framework ช่วยสร้าง GUI และ Requests Framework ติดต่อกับ Backend API`,
    image: AdminToolsPythonCustomTkinterRequestsLogo,
    tags: [
      "Python",
      "CustomTkinter",
      "Requests",
    ],
    github: "https://github.com/jadesadaphon/Admin-Tools-Python-CustomTkinter-Requests.git",
    webapp: "",
  },
  {
    id: 6,
    title: "Backend API System (Python + Flask)",
    description: `
    ระบบ Backend API พัฒนาด้วยภาษา Python โดยใช้ Flask Framework เชื่อมต่อฐานข้อมูล Microsoft SQL Server ผ่าน ODBC Driver และมีระบบ Authentication ด้วย Firebase Authentication เพื่อยืนยันตัวตนผู้ใช้งาน`,
    image: BackendAPISystemPythonFlaskLogo,
    tags: [
      "Python",
      "Flask",
      "Firebase Admin SDK (Authentication)",
      "Microsoft SQL Server"
    ],
    github: "https://github.com/jadesadaphon/Backend-API-System-Python-Flask.git",
    webapp: "",
  },
];
