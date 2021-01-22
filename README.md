Benchmarking Nginx Stale-caching with Nuxt-Graphql stack
======================================================

![](./briefing.png)

# Setup

```bash
$ cd docker
$ docker-compose up -d
$ sudo apt-get install apache2-utils
```

# Benchmarks

## Case: without caching
```bash
$ ab -c 10 -t 30 -k http://localhost:8080/
```

#### Result
```text
Requests per second:    520.22 [#/sec] (mean)
Time per request:       19.223 [ms] (mean)
Time per request:       1.922 [ms] (mean, across all concurrent requests)
Transfer rate:          1801.96 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:     6   19   4.4     18      60
Waiting:        6   19   4.4     18      60
Total:          6   19   4.4     18      61
```


## Case: with caching on Nuxt

#### Setup
1. Find ```docker/nginx/default.conf``` and unquote all quoted lines
2. Execute following command

```bash
$ cd docker
$ docker exec -it stale_cache_nginx sh
$ nginx -s reload
```

###### Whether caching is in action?

Open browser, and navigate to ```http://localhost:8080/```  
Open browser's **devtool** (By press F12), go to **Network** tab

Then, refresh the page, check **request's headers**,
if there's "**X-Cache-Status**" header in them, and possibly its value is **STALE** OR **HIT**,
this means caching is working.

#### Result
```
Requests per second:    35831.92 [#/sec] (mean)
Time per request:       0.279 [ms] (mean)
Time per request:       0.028 [ms] (mean, across all concurrent requests)
Transfer rate:          124886.19 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:     0    0   6.7      0     501
Waiting:        0    0   6.7      0     501
Total:          0    0   6.7      0     501
```

# More treasure in nginx caching behavior

#### Nuxt build fails
Check this [episode](https://www.nginx.com/blog/nginx-caching-guide/#stale)

# References
- [The Benefits of Microcaching with NGINX](https://www.nginx.com/blog/benefits-of-microcaching-nginx/)
- [A Guide to Caching with NGINX and NGINX Plus](https://www.nginx.com/blog/nginx-caching-guide/)
- [Ubuntu Linux 用 ab 指令測試網站效能](https://www.arthurtoday.com/2015/03/Using-ab-command-to-test-web-page-loading-time-in-ubuntu-linux.html)
- [github/.gitignore](https://github.com/github/gitignore)