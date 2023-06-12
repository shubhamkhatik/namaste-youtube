import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const [liveChat, setLiveChat] = useState(true);
  function handleChat() {
    setLiveChat(!liveChat);
  }
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage() + " 🚀",
        })
      );
    }, 5000);

    return () => clearInterval(i);
  }, []);

  const handleUserInput = () => {
    dispatch(
      addMessage({
        name: "shubhu",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };
  return (
    <>
      

      <div
        className={` w-full flex border border-stone-300 flex-col ${
          liveChat ? "h-auto" : "h-10"
        }`}
      >
        <div className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
            <div className="font-bold text-lg text-gray-800">Live Chat</div>
            <button className="text-blue-600" onClick={handleChat}>
              {liveChat ? "Hide Chat" : "Show Chat"}
            </button>
          </div>
        </div>
        {liveChat && (
          <>
              <div className="ml-2 overflow-y-scroll flex  flex-col-reverse xl:h-[485px] lg:h-[409px] h-[200px] space-y-4">
                {chatMessages.map((c, i) => (
                  <ChatMessage key={i} name={c.name} message={c.message} />
                ))}
              </div>
           
            <div className="flex-shrink-0 border-t border-gray-200">
              <div className="max-w-7xl mx-auto px-4 py-2">
                <form className="flex items-center">
                  <input
                    type="text"
                    placeholder="Say something..."
                    className="flex-grow border border-gray-300 rounded-full px-4 py-2 mr-2 focus:outline-none focus:border-blue-600"
                    value={liveMessage}
                    onChange={(e) => {
                      setLiveMessage(e.target.value);
                    }}
                  />
                  <button disabled={!liveMessage} onClick={handleUserInput}>
                    send
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default LiveChat;
