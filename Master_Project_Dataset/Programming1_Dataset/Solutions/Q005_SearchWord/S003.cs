// Correct solution.
// Uses a separate function.

using System;

class Program
{
    static bool Search(string[] words, string target)
    {
        foreach (string word in words)
        {
            if (word == target)
                return true;
        }

        return false;
    }

    static void Main()
    {
        string[] words = new string[5];

        for (int i = 0; i < 5; i++)
        {
            words[i] = Console.ReadLine();
        }

        string searchWord = Console.ReadLine();

        Console.WriteLine(Search(words, searchWord));
    }
}