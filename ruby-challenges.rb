# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# -------------------1) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
# input: a hash that has arrays as values 
# output: an arrary with the values sorted in alphabetical order
# create a method that takes in a hash and extract the values using .values
# the return result is several arrays holding the values we want, so use .flatten to combine three arrays into one
# then use .sort method to sort them alphbatiecally 

def return_states (hash)
    hash.values.flatten.sort
end

p return_states(us_states)


# --------------------2a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.

# Pseudo code:
# create a class called Bike
class Bike 
    # create a method to initialize instance variabel model and have one parameters
    def initialize (model)
    #make three instance variables, hardcode @wheels and current_speed 
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    # create a getter function to get the info from #{@model}, #{@model}, #{@model}.
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end


# -------------------2b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:

class Bike 
    
    def initialize (model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    # create a getter_method called pedal_faster and write the logic that increases the #{@current_speed} by the arguemnt passed in
    def pedal_faster (speed) 
        @current_speed += speed
    end
    # create a getter_method called brake and write the logic that decreases the #{@current_speed} by the arguemnt passed in, let a limit so that the current_speed cannot be less than zero
    def brake (speed) 
        @current_speed -= speed
        if @current_speed > 0 
            @current_speed
        else 
            0
        end
    end
    
end

my_bike=Bike.new('Trek')
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)

