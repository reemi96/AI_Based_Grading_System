// Error: The program allows only one guess.
// It should keep asking the user until the correct number is entered.

using System;

class Program
{
    static void Main()
    {
        int secretNumber = 25;

        int guess = Convert.ToInt32(Console.ReadLine());

        if (guess < secretNumber)
            Console.WriteLine("Too Low");
        else if (guess > secretNumber)
            Console.WriteLine("Too High");
        else
            Console.WriteLine("Correct!");
    }
}