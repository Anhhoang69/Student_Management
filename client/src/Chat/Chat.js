// import React from "react";
// import { db } from "./Firebase.js";
// import moment from "moment";

// // export const Chat = () => {
//   // var Message = ``;
//   // var savedMessage = true;
//   const username = sessionStorage.getItem("msv");
//   // var showChat = document.getElementById("messages");
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     // get values to be submitted
//     const timestamp = Date.now();
//     const messageInput = document.getElementById("message-input");
//     const message = messageInput.value;
//     console.log(message);

//     // clear the input box
//     messageInput.value = "";

//     //auto scroll to bottom
//     document
//       .getElementById("messages")
//       .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

//     // create db collection and send in the data
//     await db.ref("messages/" + timestamp).set({
//       username,
//       message,
//       timestamp,
//     });

//     // savedMessage = true;
//   };
//   var message = "";
//   // const displayChat = () => {
//   const fetchChat = db.ref("messages/");
//   // check for new messages using the onChildAdded event listener
//   fetchChat.on("child_added", function (snapshot) {
//     const messages = snapshot.val();
//     message += `<li class=${
//       username === messages.username ? "sent" : "receive"
//     }><span>${messages.username}:${moment(
//       messages.timestamp
//     ).calendar()}: </span>${messages.message}</li>`;

//     // if (savedMessage) {
//     //   document.getElementById("messages").append(message);
//     // }
//     var messageElement = document.createElement("div");
//     messageElement.innerText = message;
//     document.getElementById("messages").append(messageElement);
//   });
//   // };
//   return (
//     <div id="chat">
//       <ul id="messages"></ul>
//       <form id="message-form" onSubmit={(e) => sendMessage(e)}>
//         <input id="message-input" type="text" />
//         <button id="message-btn" type="submit">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };
import React from "react";
import { ChatEngine } from "react-chat-engine";
import { PeopleSettings } from "react-chat-engine";
import "./Chat.css";
export const Chat = () => {
  const username = sessionStorage.getItem("msv");
  // return (
  //   <div style={{ overflow: "hidden" }}>
  //     <ChatEngine
  //       height="100vh"
  //       projectID="458c42a0-f2ff-4ffa-bafa-b0f1066903ee"
  //       userName={username}
  //       userSecret={username}

  //       // onNewMessage={() =>
  //       //   new Audio(
  //       //     "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
  //       //   ).play()
  //       // }
  //     />
  //   </div>
  // );
  return (
      <div className='Container'>
        <div className='text_center'>
          <h1 id='qlsv'>Bảng điểm sinh viên</h1>
        </div>
        <div className="border_div">
          <div className="center_div">
            <label className="lbHKy">Học kỳ</label>
            <br></br>
            <label className="lbDateUpdate">Ngày cập nhật điểm các môn học:20/03/2024 4:52:57 PM</label>
            <table className="tableBD">
              <tr>
                <th>MÃ MH</th>
                <th>TÊN MÔN HỌC</th>
                <th>NHÓM-TỔ</th>
                <th>SỐ TC</th>
                <th>ĐIỂM THÀNH PHẦN</th>
                <th>ĐIỂM THI</th>
                <th>ĐIỂM TỔNG KẾT</th>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Triết học Mác - Lênin</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Triết học Mác - Lênin</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Triết học Mác - Lênin</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Triết học Mác - Lênin</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Triết học Mác - Lênin</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Triết học Mác - Lênin</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Triết học Mác - Lênin</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </table>
            <div className="sum_div">
              <label className="lbTKet">Số tín chỉ đăng ký học kỳ:</label><label className="lbTKet bold">16</label><br/>
              <label className="lbTKet">Số tín chỉ tích lũy học kỳ:</label><label className="lbTKet bold">16</label><br/>
              <label className="lbTKet">Điểm trung bình học kỳ:</label><label className="lbTKet bold">4.0</label><br/>
              <label className="lbTKet">Số tín chỉ tích lũy:</label><label className="lbTKet bold">47</label><br/>
              <label className="lbTKet">Điểm trung bình tích lũy:</label><label className="lbTKet bold">4.0</label>
            </div>
          </div>
        </div>
      </div>
  );
};
