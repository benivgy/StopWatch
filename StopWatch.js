function Stopwatch(){
    let isStart=false;
    let duration=0,currentTime,startTime,intervalId;
    let display = document.getElementById('display')
    

    
    Object.defineProperty(this,'duration',{
        get: function(){
            if(isStart){
                calcDuration();
            }
            
            return duration/1000;
        },
        
        // set: function(new_duration){
        //     if (!cords.x || !cords.y)
        //         throw new Error("Invalid duration.");
        //     duration=new_duration;
        // }
    },);
    let updateDisplay = function(){
        calcDuration();
        display.value=duration/1000;
    }
    let calcDuration = function(){
        currentTime=(new Date()).getTime();
        duration=currentTime-startTime;
    }

    this.start = function(){
        if (isStart)
            throw new Error("Stop watch is already running");
        isStart=true;
        if (duration==0)
            startTime= (new Date()).getTime();
        
        intervalId = setInterval(updateDisplay, 50);

    }
    this.stop = function(){
        if (!isStart)
            throw new Error("Stop watch is already stopped");
        isStart=false;
        currentTime=(new Date()).getTime();
        duration+=currentTime-startTime;
        clearInterval(intervalId);
        

    }

    this.reset=function(){
        if (isStart)
            throw new Error("Stop watch is already running - can't reset");
        duration=0;
        currentTime=null;
        startTime=null;
        display.value = duration;
    }
}

const sw = new Stopwatch();

