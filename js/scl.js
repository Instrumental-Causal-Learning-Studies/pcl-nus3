function delay(t) {
  setTimeout('initFadeIn()', t);
}

function initFadeIn() {
  $("body").css("visibility", "visible");
  $("body").fadeIn(300);
}

function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions1 = slide({
    name : "instructions1",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions2 = slide({
    name : "instructions2",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions01 = slide({
    name : "instructions01",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions02 = slide({
    name : "instructions02",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.conditionIntentional = slide({
    name : "conditionIntentional",
    start: function() {
    
      document.getElementById('myVideoI').addEventListener('ended',myHandler,false);

    function myHandler(e) {
      exp.go();// What you want to do after the event
    }
    },
    button : function() {
      document.getElementById('start-videoI').play()
      document.getElementById('togglerI').style.visibility = 'hidden';
      document.getElementById('myVideoI').play()


     // exp.go(); //use exp.go() if and only if there is no "present" data.
    } // remove for actual

  });

  slides.conditionUnintentional = slide({
    name : "conditionUnintentional",
    start: function() {
      document.getElementById('myVideoU').addEventListener('ended',myHandler,false);
    function myHandler(e) {
      exp.go();// What you want to do after the event
    }
    },
    button : function() {
      document.getElementById('start-videoU').play()
      document.getElementById('togglerU').style.visibility = 'hidden';
      document.getElementById('myVideoU').play()
      //  exp.go(); //use exp.go() if and only if there is no "present" data.
    } // remove for actual

  });

  var randomSort = function(arr){ 
    range = []
    output = []
  
    for(i = 0; i < arr.length; i++) {
      range = range.concat(i)
    }
  
    var getRandomFromBucket = function(bucket) {
      var randomIndex = Math.floor(Math.random()*bucket.length);
      return bucket.splice(randomIndex, 1)[0];
    }
  
    for (i = 0; i < arr.length; i++) { 
      randomIndex = getRandomFromBucket(range)
      output = output.concat(arr[randomIndex])
    }
    return output
  }


  slides.causalMatrixI = slide({
    name : "causalMatrixI",
    start: function() {
      $(".err").hide();
      this.startTime = Date.now();
  
    },
    button : function() {

      if($('input[name=blue1]:checked').length == 0|$('input[name=pink1]:checked').length == 0|$('input[name=orange1]:checked').length == 0|$('input[name=bp1]:checked').length == 0|$('input[name=po1]:checked').length == 0|$('input[name=bo1]:checked').length == 0|$('input[name=all1]:checked').length == 0|$('input[name=other1]:checked').length == 0){
        $(".err").show();
      } else {
  
        this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
        this.log_responses();
  
        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        exp.go()
      }
  
    },
  
    log_responses : function() {
      append(exp.data,
        {
          "cause1RT": this.RT,
          "cause1Blue" : $('input[name="blue1"]:checked').val(),
          "cause1Pink" : $('input[name="pink1"]:checked').val(),
          "cause1Orange" : $('input[name="orange1"]:checked').val(),
          "cause1B&P" : $('input[name="bp1"]:checked').val(),
          "cause1P&O" : $('input[name="po1"]:checked').val(),
          "cause1B&O" : $('input[name="bo1"]:checked').val(),
          "cause1All" : $('input[name="all1"]:checked').val(),
          "cause1Other" : $('input[name="other1"]:checked').val()
        }
        )
    }
  });

  slides.causalMatrixU = slide({
    name : "causalMatrixU",
    start: function() {
      $(".err").hide();
      this.startTime = Date.now();
  
    },
    button : function() {

      if($('input[name=blue2]:checked').length == 0|$('input[name=pink2]:checked').length == 0|$('input[name=orange2]:checked').length == 0|$('input[name=bp2]:checked').length == 0|$('input[name=po2]:checked').length == 0|$('input[name=bo2]:checked').length == 0|$('input[name=all2]:checked').length == 0|$('input[name=other2]:checked').length == 0){
        $(".err").show();
      } else {
  
        this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
        this.log_responses();
  
        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        exp.go()
      }
  
    },
  
    log_responses : function() {
      append(exp.data,
        {
          "cause2RT": this.RT,
          "cause2Blue" : $('input[name="blue2"]:checked').val(),
          "cause2Pink" : $('input[name="pink2"]:checked').val(),
          "cause2Orange" : $('input[name="orange2"]:checked').val(),
          "cause2B&P" : $('input[name="bp2"]:checked').val(),
          "cause2P&O" : $('input[name="po2"]:checked').val(),
          "cause2B&O" : $('input[name="bo2"]:checked').val(),
          "cause2All" : $('input[name="all2"]:checked').val(),
          "cause2Other" : $('input[name="other2"]:checked').val()
        }
        )
    }
  });

slides.attentionI =  slide({ //check this!!!
  name : "attentionI",

  //this gets run only at the beginning of the block
  start: function() {
    $(".err").hide();
    this.startTime = Date.now();

  },
  button : function(){

    if($('input[name=blueA1]:checked').length == 0|$('input[name=pinkA1]:checked').length == 0|$('input[name=orangeA1]:checked').length == 0) {
      $(".err").show();
    } else {

      this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
      this.log_responses();

      exp.go();
    }

  },

  log_responses : function() {
    append(exp.data,
      {
        "attention1RT": this.RT,
        "attention1Blue" : $('input[name="blueA1"]:checked').val(),
        "attention1Pink" : $('input[name="pinkA1"]:checked').val(),
        "attention1Orange" : $('input[name="orangeA1"]:checked').val()
      }
      )

  }
});

slides.attentionU =  slide({ //check this!!!
  name : "attentionU",

  //this gets run only at the beginning of the block
  start: function() {
    $(".err").hide();
    this.startTime = Date.now();

  },
  button : function(){

    if($('input[name=blueA2]:checked').length == 0|$('input[name=pinkA2]:checked').length == 0|$('input[name=orangeA2]:checked').length == 0) {
      $(".err").show();
    } else {

      this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
      this.log_responses();

      exp.go();
    }

  },

  log_responses : function() {
    append(exp.data,
      {
        "attention2RT": this.RT,
        "attention2Blue" : $('input[name="blueA2"]:checked').val(),
        "attention2Pink" : $('input[name="pinkA2"]:checked').val(),
        "attention2Orange" : $('input[name="orangeA2"]:checked').val()
      }
      )

  }
});

slides.intentionality = slide({
  name : "intentionality",
  start: function() {
    $(".err").hide();
    this.startTime = Date.now();

  },
  button : function() {

    if($('input[name=intentH]:checked').length == 0|$('input[name=intentB]:checked').length == 0){
      $(".err").show();
    } else {

      this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
      this.log_responses();

      /* use _stream.apply(this); if and only if there is
      "present" data. (and only *after* responses are logged) */
      exp.go()
    }

  },

  log_responses : function() {
    append(exp.data,
      {
        "intentRT": this.RT,
        "intentH" : $('input[name="intentH"]:checked').val(),
        "intentB" : $('input[name="intentB"]:checked').val()
      }
      )
  }
});

slides.subj_info =  slide({
  name : "subj_info",
  start: function() {
    $(".err").hide();

  },
  submit : function(e){
    //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
    append(exp.data, 
      {
      url : window.location.href,
      id : getID(window.location.href),
      age : $("#age").val(),
      gender : $("#gender").val(),
      citizenship : $("#citizenship").val(),
      ethnicity: $("#ethnicity").val(),
      year : $("#year").val(),
      degree: $("#degree").val(),
      comments : $("#comments").val(),
      condition : exp.condition,
      totalRT : (Date.now() - exp.startT)/60000,
      browser : exp.system["Browser"],
      os : exp.system["OS"],
      screenH: exp.system["screenH"],
      screenUH: exp.system["screenUH"],
      screenW: exp.system["screenW"],
      screenUW: exp.system["screenUW"]
    }
    )

    if(!Number.isNaN(parseInt($("#age").val())) || $("#age").val() == "") { //age should be a number

      exp.go(); //use exp.go() if and only if there is no "present" data.
    } else {

      $(".err").show();
    }
    
  }
});




  //////////////////////////////


  slides.thanks = slide({
    name : "thanks",
    start : function() {

      setTimeout(function() {sendDataToServer(exp.data);
      }, 1000);
      
    }
  });

  // simple language comprehension check to include at beginning of experiment
  slides.botcaptcha = slide({
     name : "botcaptcha",
     bot_trials : 0,
     start: function() {
       $("#error").hide();
       $("#error_incorrect").hide();
       $("#error_2more").hide();
       $("#error_1more").hide();
       // list of speaker names to be sampled from
       speaker = _.sample(["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles"]);
       // list of listener names to be sampled from
       listener = _.sample(["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Margaret"]);
       // create the utterance
       this.bot_utterance = speaker + " says to " + listener + ": It's a beautiful day, isn't it?"
       // creat ethe question
       this.bot_question = "Who is " + speaker + " talking to?"
       // append the utterance and the question to the view
       var bot_sentence = document.createElement("p");
       var bot_question = document.createElement("p");
       var content = document.createTextNode(this.bot_utterance);
       var q_content = document.createTextNode(this.bot_question);
       bot_sentence.name = "bot_sentence";
       bot_question.name = "bot_question";
       bot_sentence.appendChild(content);
       bot_question.appendChild(q_content);
       document.getElementById('bot_context').appendChild(bot_sentence);
       document.getElementById('bot_context').appendChild(document.createElement("br"));
       document.getElementById('bot_context').appendChild(bot_question);
       document.getElementById('bot_context').appendChild(document.createElement("br"));

     },
     button: function() {
       // get the participants' input
       bot_response = $("#botresponse").val();
       // append data if response correct
       if (bot_response.toLowerCase() == listener.toLowerCase()) {
         append(exp.data,
          {
            nFails: this.bot_trials,
            botSentence: this.bot_utterance,
            botQuestion: this.bot_question
          }
          )

         exp.go();
         // gives participant two more trials if the response was incorrect
       } else {
         this.bot_trials++;
         $("#error_incorrect").show();
         if (this.bot_trials == 1) {
             $("#error_2more").show();
         } else if (this.bot_trials == 2) {
             $("#error_2more").hide();
             $("#error_1more").show();
         } else {
           // if participant fails, they cannot proceed
             $("#error_incorrect").hide();
             $("#error_1more").hide();
             $("#bot_button").hide();
             $('#botresponse').prop("disabled", true);
             $("#error").show();
         };
       }
     }
  });


  return slides;
}

/// init ///
function init() {

  //; support for uniqueturker
  // https://uniqueturker.myleott.com
  /*
  repeatWorker = false;
  (function(){
      var ut_id = "[INSERT uniqueTurkerID]";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();
  */

  exp.data = {};
  exp.condition = _.sample(["UI", "IU"]); //can randomize between subject conditions here
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

  //blocks of the experiment:
  if (exp.condition == "IU"){
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions01",
      "conditionIntentional",
      "causalMatrixI",
      "attentionI",
      "instructions02",
      "conditionUnintentional",
      "causalMatrixU",
      "attentionU",
      "intentionality",
      "subj_info",
      "thanks"
    ];

  }  else if(exp.condition == "UI") {
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions01",
      "conditionUnintentional",
      "causalMatrixU",
      "attentionU",
      "instructions02",
      "conditionIntentional",
      "causalMatrixI",
      "attentionI",
      "intentionality",
      "subj_info",
      "thanks"
    ];

  } 
  
  

  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  );


  // Extra check for US IP addresses
  // TO DO: add support for Canadian IP addresses
  /*
  function USOnly() {
    var accessKey = 'b487843addca6e9ec32e6ae28aeaa022';
     $.ajax({
       url: 'https://geo.ipify.org/api/v1?apiKey=at_nuIzsEIQJAft6sr1WH67UTfFDeMIO',
       dataType: 'jsonp',
       success: function(json) {
       if (json.location.country != 'US') {
         var slides = document.getElementsByClassName('slide');
         for (i=0; i<slides.length; i++) {
          slides[i].style.display = 'none';
         }
          document.getElementsByClassName('progress')[0].style.display = 'none';
          document.getElementById('unique').innerText = "This HIT is only available to workers in the United States. Please click 'Return' to avoid any impact on your approval rating.";
        }
      }
     });
  }
  */

  exp.go(); //show first slide
  //USOnly(); // check US IP address

}



function sendDataToServer(data) {
	$.ajax({
    url: 'https://script.google.com/macros/s/AKfycbxXuy6DCKDHth0pYNH8NppEf2Swh15_jj9Oc3mNq_MrKYQ6bfo4BDmqB5XZBHvkMAvKxw/exec',
		type: 'post',
    data: data
	});
}
function append(dict1, dict2){
  var i
  var keys = Object.keys(dict2)
  for (i = 0; i < keys.length; i++){
    dict1[keys[i]] = dict2[keys[i]] 
  }
}

function getID(url){
  const start = "PROLIFIC_PID"
  var check = url.match(start)
  var reg = /PROLIFIC_PID=[a-z0-9]+&/
  if(check !== null){
    var extract = url.match(reg)
    return extract[0].slice(13,37)
  } else {
    return null
  }
  
}