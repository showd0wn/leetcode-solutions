// topic = ["堆"]

#include <queue>
#include <algorithm>

using namespace std;

class SeatManager
{
public:
    SeatManager(int n)
    {
        for (int i = 0; i < n; i++)
        {
            pq.push(i + 1);
        }
    }

    int reserve()
    {
        int tmp = pq.top();
        pq.pop();
        return tmp;
    }

    void unreserve(int seatNumber)
    {
        pq.push(seatNumber);
    }

private:
    priority_queue<int, vector<int>, greater<int>> pq;
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * SeatManager* obj = new SeatManager(n);
 * int param_1 = obj->reserve();
 * obj->unreserve(seatNumber);
 */