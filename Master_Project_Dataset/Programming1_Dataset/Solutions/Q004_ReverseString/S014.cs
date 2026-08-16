// Error: Reverses words instead of reversing characters.

using System;

class Program
{
    static void Main()
    {
        string text = Console.ReadLine();

        string[] words = text.Split(' ');

        Array.Reverse(words);

        Console.WriteLine(string.Join(" ", words));
    }
}