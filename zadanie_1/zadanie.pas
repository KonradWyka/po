program RandomNumbersRange;

uses
  SysUtils;

const
  MAX_NUMBERS = 1000;

type
  NumberArray = array[1..MAX_NUMBERS] of Integer;

procedure GenerateRandomNumbers(var numbers: NumberArray; minValue, maxValue, count: Integer);
var
  i: Integer;
begin
  Randomize;
  for i := 1 to count do
    numbers[i] := Random(maxValue - minValue + 1) + minValue;
end;

procedure SortNumbers(var numbers: NumberArray; count: Integer);
var
  i, j, temp: Integer;
begin
  for i := 1 to count - 1 do
    for j := i + 1 to count do
      if numbers[i] > numbers[j] then
      begin
        temp := numbers[i];
        numbers[i] := numbers[j];
        numbers[j] := temp;
      end;
end;

procedure DisplayNumbers(const numbers: NumberArray; count: Integer);
var
  i: Integer;
begin
  writeln('Posortowane liczby:');
  for i := 1 to count do
    writeln('Liczba ', i, ': ', numbers[i]);
end;

var
  randomNumbers: NumberArray;
  minValue, maxValue, count: Integer;

begin
  minValue := 0;
  maxValue := 1000;
  count := 99;

  if count > MAX_NUMBERS then
    count := MAX_NUMBERS;

  GenerateRandomNumbers(randomNumbers, minValue, maxValue, count);
  SortNumbers(randomNumbers, count);
  DisplayNumbers(randomNumbers, count);
end.
