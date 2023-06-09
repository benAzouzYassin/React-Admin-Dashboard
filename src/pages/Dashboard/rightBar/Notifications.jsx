import React from "react";
import { notificationsData } from "./data";
import NotificationItem from "./NotificationsItem";

function Notifications() {
  return (
    <div className="mt-8 w-[82vw] lg:w-full  bg-white p-5 h-fit rounded-xl">
      {notificationsData.map((notif) => (
        <NotificationItem
          key={notif.id}
          profileImg={notif.profileImg}
          name={notif.name}
          text={notif.text}
          timePassed={notif.timePassed}
        />
      ))}
    </div>
  );
}

export default Notifications;
