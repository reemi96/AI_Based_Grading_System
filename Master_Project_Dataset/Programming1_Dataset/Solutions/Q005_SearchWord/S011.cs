// Error: Searches only in the first element of the array.

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

        Console.WriteLine(words[0] == searchWord);
    }
}