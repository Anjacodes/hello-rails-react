class GreetingsController < ApplicationController
  def hello
    rand_num = rand(Greeting.count) + 1
    @greeting = Greeting.find(rand_num)
  end
end
