class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  //method for add message in our chatbot
  addMessageToBotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };

  //simple greeting which return simple message
  Greeting = () => {
    const message = this.createChatBotMessage(`hii`, {
      withAvatar: true,
    });
    this.addMessageToBotState(message);
  };

  //use tools widget, return button and action doing
  Tools = () => {
    const message = this.createChatBotMessage(
      `we provides this much features`,
      {
        withAvatar: true,
        widget: "Tools",
      }
    );
    this.addMessageToBotState(message);
  };
  WeatherInfoHandle = () => {
    const message = this.createChatBotMessage(
      `enter your city name to know weather if your city`,
      {
        withAvatar: true,
        widget: "WeatherInfo",
      }
    );
    this.addMessageToBotState(message);
  };
  //display list using help of states array
  WebHandler = () => {
    const messages = this.createChatBotMessage(`cources for web development:`, {
      withAvatar: true,
      widget: "WebDevelopment",
    });

    this.addMessageToBotState(messages);
  };
  SoftwareHandler = () => {
    const messages = this.createChatBotMessage(
      `cources for software development:`,
      { withAvatar: true, widget: "SoftwareDevelopment" }
    );
    this.addMessageToBotState(messages);
  };
  CallTeacherHandler = () => {
    const messages = this.createChatBotMessage(
      `call teacher for more information`,
      { withAvatar: true, widget: "CallTeacher" }
    );
    this.addMessageToBotState(messages);
  }; 
  //default handler if you not found any mathes
  handleDefault = () => {
    const message = this.createChatBotMessage("How can I help?", {
      withAvatar: true,
      widget: "Tools",
    });
    this.addMessageToBotState(message);
  };

}

export default ActionProvider;
