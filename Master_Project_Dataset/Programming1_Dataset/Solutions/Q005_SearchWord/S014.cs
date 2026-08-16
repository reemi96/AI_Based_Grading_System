// Error: Uses one variable instead of storing all words in the array.
// Only the last entered word is kept, so the program cannot search all 5 words.

using System;

class Program
{
    static void Main()
    {
        string word = "";

        for (int i = 0; i < 5; i++)
        {
            word = Console.ReadLine();
        }

        string searchWord = Console.ReadLine();

        Console.WriteLine(word == searchWord);
    }
}