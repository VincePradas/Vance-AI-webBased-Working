const axios = require('axios')

async function interactWithChatGPT(prompt) {
    const removed = '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'; // Replace 'YOUR_API_KEY' with your actual API key
  
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${removed}`
        }
      });
  
      if (response.status !== 200) {
        throw new Error('Failed to fetch response from the API');
      }
  
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error interacting with the API:', error);
      return null;
    }
  }

