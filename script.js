let localstream;
let remotestream;

let init = async () => {
  localstream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  document.getElementById("user1").srcObject = localstream;
};

init();
