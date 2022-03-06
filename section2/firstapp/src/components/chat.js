import { Button, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import app_config from "../config";
import"./chat.css"
const Chat=()=>{
    const url=app_config.api_url

    const [socket, setSocket] = useState(io(url,{autoconnect:false}))

    const [message, setMessage] = useState("")

    const [messageList, setMessageList] = useState([
        // {text:"Abe kl kaun sa exam h??", sent:true},
        // {text:"pta ni be shukla se puch kr btata hu ruk", sent:false},
        // {text:"ha jldi puch ni to ek hzar ka jugaad krna pdega", sent:true},
        // {text:"ni be aisa naubat ni aane dunga tnsion na le tu",sent:false},
        // {text:"ni be aisa naubat ni aane dunga tnsion na le tu abe bhai tu koi khani suna na akbar aur beerbal wali koi khani jisme nauratan hote the sb akbar k drbar me aur wo sb sunne me bhut mja aata h be mere ko",sent:false},
        // {text:"मुग़ल वंश के बादशाह और नसीरुद्दीन हुमायूँ के बेटे, जलाल उद्दीन मोहम्मद अकबर और उनके कहे जाने वाले नवरत्न में से एक रत्न बीरबल के किस्से काफी मशहूर हैं । बादशाह अकबर कई बार परेशानियों में फसने पर या किसी गंभीर मुद्दे पर अपने सलाहकार मंत्री बीरबल की सहायता अवश्य लेते थे।",sent:true},
        // {text:"Abe kl kaun sa exam h??", sent:true},
        // {text:"pta ni be shukla se puch kr btata hu ruk", sent:false},
        // {text:"ha jldi puch ni to ek hzar ka jugaad krna pdega", sent:true},
        // {text:"ni be aisa naubat ni aane dunga tnsion na le tu",sent:false},
        // {text:"मुग़ल वंश के बादशाह और नसीरुद्दीन हुमायूँ के बेटे, जलाल उद्दीन मोहम्मद अकबर और उनके कहे जाने वाले नवरत्न में से एक रत्न बीरबल के किस्से काफी मशहूर हैं । बादशाह अकबर कई बार परेशानियों में फसने पर, या किसी गंभीर मुद्दे पर अपने सलाहकार मंत्री बीरबल की सहायता अवश्य लेते थे।",sent:true},
        // {text:"Abe kl kaun sa exam h??", sent:true},
        // {text:"pta ni be shukla se puch kr btata hu ruk", sent:false},
        // {text:"ha jldi puch ni to ek hzar ka jugaad krna pdega", sent:true},
        // {text:"ni be aisa naubat ni aane dunga tnsion na le tu",sent:false},
        // {text:"मुग़ल वंश के बादशाह और नसीरुद्दीन हुमायूँ के बेटे, जलाल उद्दीन मोहम्मद अकबर और उनके कहे जाने वाले नवरत्न में से एक रत्न बीरबल के किस्से काफी मशहूर हैं । बादशाह अकबर कई बार परेशानियों में फसने पर, या किसी गंभीर मुद्दे पर अपने सलाहकार मंत्री बीरबल की सहायता अवश्य लेते थे।",sent:true}
    ])
    useEffect(() => {    
      socket.connect()
    }, [])

      

        socket.on('recmsg',(data)=>{
            console.log(data)
            setMessageList([...messageList,data])
        })

    const displayMessages=()=>{
        return messageList.map((obj)=>(
            <div className={obj.sent ? "message-sent message-box":"message-recieved message-box "}>
                <p className="message-text">{obj.text}</p>
            </div>
        )) 
    }

    const sendMessage=()=>{
        let obj={text:message,sent:true}
        socket.emit('sendmsg',obj)
        setMessageList([...messageList,obj])
        setMessage("")
    }
    

    return(
        <div className="container">
        <Card>
          <CardContent>
            <div className="chat-area">{displayMessages()}</div>
  
            <div className="input-group mt-2">
              <input
                className="form-control"
                placeholder="Type Your Message Here..."
                onChange={e=>setMessage(e.target.value)}
                value={message}
              />
  
              <Button variant="contained" onClick={sendMessage}>
                Send &nbsp; <i class="fas fa-paper-plane"></i>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };
    

export default Chat;