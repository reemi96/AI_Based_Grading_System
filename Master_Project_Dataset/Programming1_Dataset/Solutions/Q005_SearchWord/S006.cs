// Error: Reads only 4 words instead of 5.

using System;

class Program
{
    static void Main()
    {
        string[] words = new string[4];

        for (int i = 0; i < 4; i++)
        {
            words[i] = Console.ReadLine();
        }

        string searchWord = Console.ReadLine();

        bool found = false;

        for (int i = 0; i < 4; i++)
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