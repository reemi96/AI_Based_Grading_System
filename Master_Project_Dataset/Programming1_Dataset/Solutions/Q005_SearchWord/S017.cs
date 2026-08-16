// Error: Always prints True regardless of the input.

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

        Console.WriteLine(true);
    }
}