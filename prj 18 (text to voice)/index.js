let speech = new SpeechSynthesisUtterance(); //this module is for text to speech

let voices = []; //setting an empty voices array to store options

let voiceSelect = document.querySelector("select"); //getting the dropdown selector

window.speechSynthesis.onvoiceschanged = () => {
  //setting the change of voices here
  voices = window.speechSynthesis.getVoices(); //voices now has the list of all voices
  speech.voice = voices[0]; // setting the initial speech voice to the first one in the list

  voices.forEach((voice, i) => {
    //this is important
    voiceSelect.options[i] = new Option(voice.name, i); //setting the dropdown options with all the voices received in "voices"
  });
};

// this is the onChange handler for any kind of voice that is selected
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value]; //here the current speech voice is set to the selected voice value
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
