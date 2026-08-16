using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[10];

        for (int i = 0; i < numbers.Length; i++)
        {
            Console.Write("Enter number " + (i + 1) + ": ");
            numbers[i] = Convert.ToInt32(Console.ReadLine());
        }

        int largest = numbers[0];
        int smallest = numbers[0];
        int evenCount = 0;
        int oddCount = 0;

        for (int i = 0; i < numbers.Length; i++)
        {
            if (numbers[i] > largest)
                largest = numbers[i];

            if (numbers[i] < smallest)
                smallest = numbers[i];

            if (numbers[i] % 2 == 0)
                evenCount++;
            else
                oddCount++;
        }

        Console.WriteLine("Largest Number: " + largest);
        Console.WriteLine("Smallest Number: " + smallest);
        Console.WriteLine("Even Numbers: " + evenCount);
        Console.WriteLine("Odd Numbers: " + oddCount);
    }
}