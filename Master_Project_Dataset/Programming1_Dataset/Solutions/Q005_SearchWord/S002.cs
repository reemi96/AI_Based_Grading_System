// Correct solution.
// Uses foreach loop.

using System;

class Program
{
    static void Main()
    {
        string[] words = new string[5];

        for (int i = 0; i < 5; i++)
        {
            words[i] = Console.ReadLine();
        }

        string searchWord = Console.ReadLine();

        bool found = false;

        foreach (string word in words)
        {
            if (word == searchWord)
            {
                found = true;
                break;
            }
        }

        Console.WriteLine(found);
    }
}