// Error: Does not print "Too Low" or "Too High".
// It only keeps reading guesses until the correct number is entered.

using System;

class Program
{
    static void Main()
    {
        int secretNumber = 25;
        int guess = Convert.ToInt32(Console.ReadLine());

        while (guess != secretNumber)
        {
            guess = Convert.ToInt32(Console.ReadLine());
        }

        Console.WriteLine("Correct!");
    }
}