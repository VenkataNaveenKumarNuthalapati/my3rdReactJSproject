const Button = (props) => {
  //  Write your code here.
  return <button className={props.className}>{props.text} </button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Social Buttons</h1>
    <div>
      <Button text="Like" className="likeButton" />
      <Button text="Comment" className="commentButton" />
      <Button text="Share" className="shareButton" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
