var scbuf=[]
class ScincAudioProcessor extends AudioWorkletProcessor
{
	constructor()
	{
		super();
		console.log("Created audio processor")
		this.gn=0
		this.port.onmessage = function(e)
		{
			scbuf.push(e.data)
		}

		for(let i=0;i<30;i++)
			this.port.postMessage(0)
	}
	
	static get parameterDescriptors()
	{
		return [];
	}

	process(inputList, outputList, parameters)
	{
		this.gn++

		for(let o=0;o<1;o++)
		{
			let output = outputList[o];
			let channelCount = output.length
			for (let channel = 0; channel < 2; channel++)
			{
				let sampleCount = output[channel].length;
				for (let i = 0; i < sampleCount; i++)
				{
					let l=0
					if(scbuf.length>0)
						l=scbuf[0].shift()
					output[channel][i] = l;
				}
			}
			scbuf.shift()
			this.port.postMessage(1)
		}
		return true;
	}
}

registerProcessor("ScincAudio", ScincAudioProcessor);