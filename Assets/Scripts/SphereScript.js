#pragma strict

var scoreCount = 0;
var scoreText = new GUIText();
var timeText = new GUIText();
var winText = new GUIText();
var scoreLimit = 4;
var completeTime = 0;
var currentTime = 0;

function Start () {
	scoreCount = 0;
	winText.text = "";
}

function Update() {
	currentTime = Time.time;
	timeText.text = "Time: " + currentTime;
}

function FixedUpdate () {
	var moveX = Input.GetAxis("Horizontal");
	var moveZ = Input.GetAxis("Vertical");
	var movement = new Vector3(moveX, 0.0, moveZ);
	rigidbody.AddForce(movement);
}

function OnTriggerEnter(other: Collider) {
	var gameObject = other.gameObject;
	if(gameObject.CompareTag("pickUp")) {
		gameObject.SetActive(false);
		scoreCount = scoreCount + 1;
		scoreText.text = "Score: " + scoreCount;
		if(parseInt(scoreCount) == scoreLimit) {
			winText.text = "You Finished";
		}
	}
	
}
