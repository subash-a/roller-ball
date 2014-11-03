#pragma strict

var gameSphere : GameObject;
var offset : Vector3;

function Start () {
	offset = transform.position;
}

function LateUpdate () {
	transform.position = gameSphere.transform.position + offset;
}