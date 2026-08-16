// Error: The program prints "Correct!" inside the loop for wrong guesses.
// It gives a success message before the correct number is entered.

using System;

class Program
{
    static void Main()
    {
        int secretNumber = 25;
        int guess = Convert.ToInt32(Console.ReadLine());

        while (guess != secretNumber)
        {
            if (guess < secretNumber)
                Console.WriteLine("Too Low");
            else
                Console.WriteLine("Too High");

            Console.WriteLine("Correct!");

            guess = Convert.ToInt32(Console.ReadLine());
        }
    }
}