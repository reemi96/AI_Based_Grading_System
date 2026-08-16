// Correct solution.
// Uses a for loop and stops searching when the word is found.

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

        for (int i = 0; i < 5; i++)
        {
            if (words[i] == searchWord)
            {
                found = true;
                break;
            }
        }

        Console.WriteLine(found);
    }
}