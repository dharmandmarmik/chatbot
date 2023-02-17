import { createChatBotMessage } from "react-chatbot-kit";
import SoftwareDevelopment from "./widgets/SoftwareDevelopment";
import WebDevelopment from "./widgets/WebDevelopment";
import Tools from "./widgets/Tools";
import WeatherInfo from "./widgets/WeatherInfo";

const botName = "Dharm Patel";
//congig for chatbot
const config = {
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [createChatBotMessage(`hii, i am ${botName}.`)],
  state: {
    WebDevelopmentState: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "BOOTSTRAP",
      "JQUERY & AJAX",
      "SASS",
      "REACT",
      "REDUX",
      "NODEJS",
      "EXPRESS",
      "MONGODB & MONGOOSE",
    ],
    ToolsState: [
      "enrollment number",
      "web development",
      "software development",
      "whether info",
    ],
  },
  widgets: [
    {
      widgetName: "WebDevelopment",
      widgetFunc: (props) => <WebDevelopment {...props} />,
      mapStateToProps: ["WebDevelopmentState"],
    },
    {
      widgetName: "SoftwareDevelopment",
      widgetFunc: (props) => <SoftwareDevelopment {...props} />,
    },
    {
      widgetName: "Tools",
      widgetFunc: (props) => <Tools {...props} />,
      mapStateToProps: ["ToolsState"],
    },
    {
      widgetName: "WeatherInfo",
      widgetFunc: (props) => <WeatherInfo {...props} />,
      mapStateToProps: ["WeatherInfo"],
    }
  ],
};

export default config;
