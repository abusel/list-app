import avatar from "../Assets/avatar.svg";
import createButton from "../Assets/createButton.svg";
import createPressed from "../Assets/createPressed.svg";

function ListsHomeHeader({ setSelectedPage, setSelectedListId }) {
  return (
    <div className="homeHeaderDesktop">
      <img className="avatar" src={avatar} />
      <h1 className="listHeaderText">Lists</h1>
      <div className="imageDiv">
        {/* <img
          src={createButton}
          className="createImage"
          onClick={(e) => {
            setSelectedPage("create");
            setSelectedListId("");
            e.currentTarget.style.backgroundColor = "blue";
          }}
        /> */}

        <svg
          onClick={(e) => {
            setSelectedPage("create");
            setSelectedListId("");
          }}
          className="createImage"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z"
            className="backgroundCreate"
            fill="white"
          />
          <path
            className="pencil"
            d="M30.9828 9.89377C32.0094 10.9189 32.0094 12.5811 30.9828 13.6063L29.5766 15.0172L24.9828 10.4244L26.3938 9.01533C27.4203 7.99001 29.0797 7.99001 30.1063 9.01533L30.9828 9.89377ZM16.0813 19.3297L23.9234 11.4847L28.5172 16.0766L20.6703 23.9188C20.3844 24.2094 20.0328 24.425 19.6438 24.5563L15.4813 25.9438C15.0359 26.075 14.6328 25.9719 14.3281 25.6297C14.0281 25.3672 13.925 24.9219 14.0563 24.5188L15.4438 20.3563C15.575 19.9672 15.7906 19.6156 16.0813 19.3297ZM17 10.9578C17.8297 10.9578 18.5 11.6717 18.5 12.4578C18.5 13.3297 17.8297 13.9578 17 13.9578H12.5C11.6717 13.9578 11 14.6703 11 15.4578V27.5C11 28.3297 11.6717 29 12.5 29H24.5C25.3297 29 26 28.3297 26 27.5V22.9578C26 22.1703 26.6703 21.4578 27.5 21.4578C28.3297 21.4578 29 22.1703 29 22.9578V27.5C29 29.9844 26.9844 32 24.5 32H12.5C10.0147 32 8 29.9844 8 27.5V15.4578C8 12.9735 10.0147 10.9578 12.5 10.9578H17Z"
            fill="#242424"
          />
        </svg>
      </div>
    </div>
  );
}
export default ListsHomeHeader;
