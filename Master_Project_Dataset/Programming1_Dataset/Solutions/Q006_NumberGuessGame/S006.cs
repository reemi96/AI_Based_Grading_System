// Error: Always prints "Correct!" without checking the user's guess.
// The input is read but not compared with the secret number.

using System;

class Program
{
    static void Main()
    {
        int secretNumber = 25;

        int guess = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Correct!");
    }
}