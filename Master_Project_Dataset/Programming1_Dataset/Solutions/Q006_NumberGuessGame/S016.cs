// Error: The input is compared as a string instead of an integer.
// It does not properly use numeric comparison for Too Low and Too High.
// Without if/ else if /else 
using System;

class Program
{
    static void Main()
    {
        string secretNumber = "25";
        string guess = Console.ReadLine();

        while (guess != secretNumber)
        {
            Console.WriteLine("Wrong");
            guess = Console.ReadLine();
        }

        Console.WriteLine("Correct!");
    }
}