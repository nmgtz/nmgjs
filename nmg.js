var buttonShow = document.getElementById("btnShow");
                var chatBotElement = document.getElementById("chatBot");
                var wordList = ['hello', 'hloo', 'helo', 'hllo', 'ello', 'elo', 'hi', 'heelo','thanks','nmgai'];
                var botIsTyping = false;
        
                function sendMessage() {
                    var textExpl = document.getElementById("explnTg");
                    var usersInpt = document.getElementById("userInput").value;
                    if (botIsTyping) {
                        return;
                    }
                    if (usersInpt.trim() === "") {
                        return;
                    }
                    var matchedWord = wordList.find(word => usersInpt.toLowerCase().includes(word.toLowerCase()));

                    appendMessage("You", usersInpt);
                    setTimeout(function () {
                        var botResponse;
                        if (matchedWord) {
                        if (matchedWord === 'hello' || matchedWord === 'hloo' || matchedWord === 'helo' || matchedWord === 'hllo' || matchedWord === 'hel' || matchedWord === 'elo' || matchedWord === 'hi' || matchedWord === 'heelo') {
                            botResponse = "Hello there! I'm delighted to connect with you and engage in this conversation. Feel free to inquire about anything you need assistance with, and I'll do my best to provide clear explanations. Enjoy the chat with ChatNMG!";
                        } else if (matchedWord === 'thanks') {
                            botResponse = "Oh, I'm glad to hear that it worked for you! Thank you for taking the time, and if you encounter any other issues, please feel free to ask, as I am ready to assist you. Welcome back, and don't hesitate to pose any questions you may have.";
                        }
                          else if (matchedWord === 'nmgai') {
                            botResponse = "nmgAI, developed in 2024, is an artificial intelligence system designed to assist people through chatbot interactions, giving rise to the generated entity known as ChatNMG.";
                        }
                    } else {
                        botResponse = "Apologies, I may not have comprehended your question regarding \"" + usersInpt + "\". This could be due to the information I last trained on in 2024 or a possible misphrasing on your part. I am having difficulty understanding it. Please consider rephrasing your question, and I'll be happy to assist. I apologize for any inconvenience caused.";
                    }
            
                        
                        botIsTyping = true;
                        typeOutMessage("chatNMG", botResponse, chatBotElement);
            
                        
                        setTimeout(function () {
                            botIsTyping = false;
                        }, botResponse.length * 50 + 1000);
                    }, 2000);
            
                   
                    document.getElementById("userInput").value = "";
                    textExpl.style.display = "none";
                }
            
                
                document.getElementById("userInput").addEventListener("keyup", function (event) {
                    if (event.key === "Enter") {
                        sendMessage();
                    }
                });
            
                
                function appendMessage(name, message) {
                    var messageElement = document.createElement("div");
                    var newPar = document.createElement("p");
                    newPar.setAttribute("id", "name");
                    newPar.innerHTML = name;
                    messageElement.appendChild(newPar);
            
                    var newPar2 = document.createElement("p");
                    newPar2.setAttribute("id", "message");
                    newPar2.innerHTML = message;
                    messageElement.appendChild(newPar2);
            
                    chatBotElement.appendChild(messageElement);
                    chatBotElement.scrollTop = chatBotElement.scrollHeight;
                }
            
                
                function typeOutMessage(name, message, element) {
                    var index = 0;
            
                    function typeCharacter() {
                        if (index < message.length) {
                            element.innerHTML += message.charAt(index);
                            index++;
                            setTimeout(typeCharacter, 50); 
                        }
                    }
            
                    appendMessage(name, ""); 
                    typeCharacter();
                }
