const Notification = ({showNotifications}) => {
  return (
    <div className={`bi-notification-screen ${showNotifications ? 'active' : ''}`} >
      {/* notification 1 */}
      <div className="bi-notification-box active">
        <div className="bi-notification-user-img">
          <img src="assets/images/contact-user-1.png" alt="" srcSet="" />
        </div>
        <div className="bi-notification-info">
          <div className="bi-notify-text">
            <b>Dennis Nedry</b> commented on
            <b>Isla Nublar SOC2 compliance report</b>
          </div>
          <div className="bi-notify-time">Last Wednesday at 9:42 AM</div>
        </div>
        <button className="bi-notification-cancel-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 1.5C4.41594 1.5 1.5 4.41594 1.5 8C1.5 11.5841 4.41594 14.5 8 14.5C11.5841 14.5 14.5 11.5841 14.5 8C14.5 4.41594 11.5841 1.5 8 1.5ZM10.3534 9.64656C10.4018 9.69253 10.4405 9.74772 10.4672 9.80887C10.4939 9.87003 10.5082 9.93592 10.509 10.0026C10.5099 10.0694 10.4974 10.1356 10.4722 10.1974C10.4471 10.2593 10.4098 10.3154 10.3626 10.3626C10.3154 10.4098 10.2593 10.4471 10.1974 10.4722C10.1356 10.4974 10.0694 10.5099 10.0026 10.509C9.93592 10.5082 9.87003 10.4939 9.80887 10.4672C9.74772 10.4405 9.69253 10.4018 9.64656 10.3534L8 8.70719L6.35344 10.3534C6.25891 10.4432 6.13303 10.4926 6.00265 10.4909C5.87227 10.4892 5.7477 10.4367 5.6555 10.3445C5.5633 10.2523 5.51076 10.1277 5.50909 9.99735C5.50742 9.86697 5.55675 9.74109 5.64656 9.64656L7.29281 8L5.64656 6.35344C5.55675 6.25891 5.50742 6.13303 5.50909 6.00265C5.51076 5.87227 5.5633 5.7477 5.6555 5.6555C5.7477 5.5633 5.87227 5.51076 6.00265 5.50909C6.13303 5.50742 6.25891 5.55675 6.35344 5.64656L8 7.29281L9.64656 5.64656C9.74109 5.55675 9.86697 5.50742 9.99735 5.50909C10.1277 5.51076 10.2523 5.5633 10.3445 5.6555C10.4367 5.7477 10.4892 5.87227 10.4909 6.00265C10.4926 6.13303 10.4432 6.25891 10.3534 6.35344L8.70719 8L10.3534 9.64656Z"
              fill="#FFC700"
            />
          </svg>
        </button>
      </div>
      {/* notification 2 */}
      <div className="bi-notification-box active ">
        <div className="bi-notification-user-img">
          <img src="assets/images/contact-user-5.png" alt="" srcSet="" />
        </div>
        <div className="bi-notification-info">
          <div className="bi-notify-text">
            <b>Denise Nedry</b> replied to
            <b>Anna Srzand</b>
          </div>
          <div className="bi-notify-description">
            “Oh, I finished de-bugging the phones, but the systems compiling for
            eighteen minutes, or twenty. So, some minor systems may go on and
            off for a while.”
          </div>
          <div className="bi-notify-time">Last Wednesday at 9:42 AM</div>
        </div>
        <button className="bi-notification-cancel-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 1.5C4.41594 1.5 1.5 4.41594 1.5 8C1.5 11.5841 4.41594 14.5 8 14.5C11.5841 14.5 14.5 11.5841 14.5 8C14.5 4.41594 11.5841 1.5 8 1.5ZM10.3534 9.64656C10.4018 9.69253 10.4405 9.74772 10.4672 9.80887C10.4939 9.87003 10.5082 9.93592 10.509 10.0026C10.5099 10.0694 10.4974 10.1356 10.4722 10.1974C10.4471 10.2593 10.4098 10.3154 10.3626 10.3626C10.3154 10.4098 10.2593 10.4471 10.1974 10.4722C10.1356 10.4974 10.0694 10.5099 10.0026 10.509C9.93592 10.5082 9.87003 10.4939 9.80887 10.4672C9.74772 10.4405 9.69253 10.4018 9.64656 10.3534L8 8.70719L6.35344 10.3534C6.25891 10.4432 6.13303 10.4926 6.00265 10.4909C5.87227 10.4892 5.7477 10.4367 5.6555 10.3445C5.5633 10.2523 5.51076 10.1277 5.50909 9.99735C5.50742 9.86697 5.55675 9.74109 5.64656 9.64656L7.29281 8L5.64656 6.35344C5.55675 6.25891 5.50742 6.13303 5.50909 6.00265C5.51076 5.87227 5.5633 5.7477 5.6555 5.6555C5.7477 5.5633 5.87227 5.51076 6.00265 5.50909C6.13303 5.50742 6.25891 5.55675 6.35344 5.64656L8 7.29281L9.64656 5.64656C9.74109 5.55675 9.86697 5.50742 9.99735 5.50909C10.1277 5.51076 10.2523 5.5633 10.3445 5.6555C10.4367 5.7477 10.4892 5.87227 10.4909 6.00265C10.4926 6.13303 10.4432 6.25891 10.3534 6.35344L8.70719 8L10.3534 9.64656Z"
              fill="#FFC700"
            />
          </svg>
        </button>
      </div>
      {/* notification 3 */}
      <div className="bi-notification-box request  ">
        <div className="bi-notification-user-img">
          <img src="assets/images/contact-user-2.png" alt="" srcSet="" />
        </div>
        <div className="bi-notification-info">
          <div className="bi-notify-text">
            <b>Dennis Nedry</b> requested access to
            <b>Isla Nublar SOC2 compliance report</b>
          </div>
          <div className="bi-notification-btns">
            <button className="bi-notification-approve-btn">Approve</button>
            <button className="bi-notification-decline-btn">Decline</button>
          </div>
          <div className="bi-notify-time">Last Wednesday at 9:42 AM</div>
        </div>
        <button className="bi-notification-cancel-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 1.5C4.41594 1.5 1.5 4.41594 1.5 8C1.5 11.5841 4.41594 14.5 8 14.5C11.5841 14.5 14.5 11.5841 14.5 8C14.5 4.41594 11.5841 1.5 8 1.5ZM10.3534 9.64656C10.4018 9.69253 10.4405 9.74772 10.4672 9.80887C10.4939 9.87003 10.5082 9.93592 10.509 10.0026C10.5099 10.0694 10.4974 10.1356 10.4722 10.1974C10.4471 10.2593 10.4098 10.3154 10.3626 10.3626C10.3154 10.4098 10.2593 10.4471 10.1974 10.4722C10.1356 10.4974 10.0694 10.5099 10.0026 10.509C9.93592 10.5082 9.87003 10.4939 9.80887 10.4672C9.74772 10.4405 9.69253 10.4018 9.64656 10.3534L8 8.70719L6.35344 10.3534C6.25891 10.4432 6.13303 10.4926 6.00265 10.4909C5.87227 10.4892 5.7477 10.4367 5.6555 10.3445C5.5633 10.2523 5.51076 10.1277 5.50909 9.99735C5.50742 9.86697 5.55675 9.74109 5.64656 9.64656L7.29281 8L5.64656 6.35344C5.55675 6.25891 5.50742 6.13303 5.50909 6.00265C5.51076 5.87227 5.5633 5.7477 5.6555 5.6555C5.7477 5.5633 5.87227 5.51076 6.00265 5.50909C6.13303 5.50742 6.25891 5.55675 6.35344 5.64656L8 7.29281L9.64656 5.64656C9.74109 5.55675 9.86697 5.50742 9.99735 5.50909C10.1277 5.51076 10.2523 5.5633 10.3445 5.6555C10.4367 5.7477 10.4892 5.87227 10.4909 6.00265C10.4926 6.13303 10.4432 6.25891 10.3534 6.35344L8.70719 8L10.3534 9.64656Z"
              fill="#FFC700"
            />
          </svg>
        </button>
      </div>
      {/* notification 4 */}
    </div>
  );
};

export default Notification;
