# ASSESSMENT 5: Coding Critique with AI

# Use AI to learn about the following code.

# Based on your learning, reverse engineer a prompt that this code would satisfy.

# Add comments to each line to explain the code.

taco_votes = ['fish taco', 'california burrito', 'Tacos Al Pastor', 'Carnitas tacos', 'California burrito', 'Fish taco', 'California Burrito', 'Fish Taco', 'Tacos de Barbacoa', 'tacos Al Pastor', 'fish taco', 'California burrito', 'fish taco', 'tacos al pastor', 'Carnitas tacos', 'Fish taco', 'tacos de barbacoa', 'fish taco', 'Carnitas Tacos', 'carnitas tacos', 'Fish Taco', 'fish taco']

# prompt: counts how total votes of each type of tacos in the array, and then return the result in a hash

# .reduce method is the accumulator used to accumulate the elements from the given hash
# Hash.new(0) initializes an empty hash with a default value of 0 for each type of taco.
# do |result, vote| ... end: This is the block of code that gets executed for each element in taco_votes. result is the accumulator, and vote is the element in the taco_votes array.
totals = taco_votes.reduce(Hash.new(0)) do |result, vote|

# increment the count of current type of taco in the hash called 'result'. .downcase is used to ensure all the elements are converted to lowercase 
  result[vote.downcase] += 1
# print the updated result
  result
end

p totals

{"fish taco"=>9, "california burrito"=>4, "tacos al pastor"=>3, "carnitas tacos"=>4, "tacos de barbacoa"=>2}


