// Correct solution.
// Uses while loop.

using System;

class Program
{
    static void Main()
    {
        string[] words = new string[5];

        int i = 0;

        while (i < 5)
        {
            words[i] = Console.ReadLine();
            i++;
        }

        string searchWord = Console.ReadLine();

        bool found = false;
        i = 0;

        while (i < 5)
        {
            if (words[i] == searchWord)
            {
                found = true;
                break;
            }

            i++;
        }

        Console.WriteLine(found);
    }
}