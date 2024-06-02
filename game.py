# start by importing the random module to generate a random number

import random

# next, define the secret number the user needs to guess.

secret_number = random.randint(1, 20)

# now user input by using the input function

guess = int(input("Guess a number between 1 and 20: "))

# loop to keep asking the user for guessing until they guess correctly

while True:
    guess = int(input("Guess a number between 1 and 20: "))
    if guess == secret_number:
        print("Congradulations! You guessed the number!")
        break
    elif guess < secret_number:
        print("Your guess is too low. Try again.")
    else:
        print("Your guess is too high. Try again")    
    