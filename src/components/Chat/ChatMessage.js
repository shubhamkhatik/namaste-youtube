const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex gap-2 items-center">
        <span className="flex text-xs text-white justify-center items-center w-6 h-6 rounded-full bg-stone-700 mr-2 flex-shrink-0">{name.charAt(0).toUpperCase()}</span>
        <div className="text-neutral-500 font-medium flex-shrink-0 w-16">{name}</div>
        <div className="text-sm">{message}</div>
    </div>
    );
  };
  export default ChatMessage;

