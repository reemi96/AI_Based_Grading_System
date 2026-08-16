// Error: without read word & store them in the array
using System;

class Program
{
    static void Main()
    {
        string[] words = new string[5];
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