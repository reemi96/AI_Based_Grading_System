// Error: without break
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
            }
        }

        Console.WriteLine(found);
    }
}