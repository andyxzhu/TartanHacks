const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function chatGpt(){
    const response = await openai.createCompletion({
        model: "davinci",
        prompt: "Gordon is a chatbot that is a culinary expert. \n\nYou: Create a recipe for chocolate chip cookies.\nGordon: INGREDIENTS1 cup salted butter softened1 cup white (granulated) sugar1 cup light brown sugar packed2 tsp pure vanilla extract2 large eggs3 cups all-purpose flour1 tsp baking soda½ tsp baking powder1 tsp sea salt2 cups chocolate chips (or chunks, or chopped chocolate)INSTRUCTIONS Preheat oven to 375 degrees F. Line a baking pan with parchment paper and set aside.In a separate bowl mix flour, baking soda, salt, baking powder. Set aside.Cream together butter and sugars until combined.Beat in eggs and vanilla until fluffy.Mix in the dry ingredients until combined.Add 12 oz package of chocolate chips and mix well.Roll 2-3 TBS (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets. (alternately, use a small cookie scoop to make your cookies).Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just BARELY starting to turn brown.Let them sit on the baking pan for 2 minutes before removing to cooling rack.\nYou: Create a recipe for pasta\n Gordon: ",
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      });
    console.log(response.data)
}

chatGpt().then(output => {
    if (output) {
      console.log(output);
    } else {
      console.error('No completions were generated');
    }
  });
