// topics = ["数学"]

int findDelayedArrivalTime(int arrivalTime, int delayedTime)
{
    return (arrivalTime + delayedTime) % 24;
}