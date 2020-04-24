
import java.util.*;
import java.util.concurrent.Semaphore;

public class OrderProcessing {
    private Queue<Order> queue;
    private final Semaphore addQueue;
    private final Semaphore processQueue;

    public static void main(String[] args) throws InterruptedException {
        // TODO Auto-generated method stub
        OrderProcessing mt = new OrderProcessing();
        mt.generate();
    }

    public OrderProcessing() {
        queue = new ArrayDeque<Order>(5);
        addQueue = new Semaphore(1);
        processQueue = new Semaphore(0);

    }

    private void process() throws InterruptedException {
        processQueue.acquire();
        while (!queue.isEmpty()) {
            System.out.println(queue.poll().number);
        }
        addQueue.release();
    }

    private void generate() throws InterruptedException {
        for (int i = 0; i <= 100; i++) {
            addQueue.acquire();
            if (queue.size() >= 5) {
                processQueue.release();
                process();
            } else {
                queue.offer(new Order(i));
                addQueue.release();
            }
        }
        if (!queue.isEmpty()) {
            processQueue.release();
            process();
        }
    }

    static class Order {
        int number;

        public Order(int number) {
            this.number = number;
        }
    }
}