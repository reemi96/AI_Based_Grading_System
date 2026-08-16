// Error: wrong in search logic & without break

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

        bool found = true;

        for (int i = 0; i < 5; i++)
        {
            if (words[i] == searchWord)
            {
                found = false;
            }
        }

        Console.WriteLine(found);
    }
}