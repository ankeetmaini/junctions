/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/1.docs-introduction-what-you-get-from-junctions-c56dceed42ae80270e01.js","9598ce7f620bc0698336d4a683a7ece2"],["/10.docs-basics-routes-4a2607def10b82d52348.js","ad9dfb3ec14e6bfe9adbe599f750e8ff"],["/11.docs-basics-locations-ee82f05c44cd2bb4b5db.js","cc57baa1d6b2ad4489b754b57c14c27f"],["/11722dfd0d09de3a50a506b0bcf75d49.png","11722dfd0d09de3a50a506b0bcf75d49"],["/12.docs-basics-links-22718ceb2b4f676ba738.js","e77b3e53cc091d7a44cfeb7987d6a7e3"],["/13.docs-basics-junctions-a4e5e7e1826825b6fdd8.js","ed19f84a0b4dc31eac78c944eca4d3e1"],["/14.docs-basics-example-contact-list-9ce2d788f2759f9d6d5e.js","0c6c438f62ace2f077d5d455ecaa6550"],["/15.docs-basics-converting-locations-to-routes-5a6eb5d4410bfa9c2cea.js","cf7d809c55cdae22d5a0f819daa21189"],["/16.docs-api-react-junctions-Router-04ca5a7762cd218b316e.js","3a7c827503d2784f99da4f9a2474628b"],["/17.docs-api-react-junctions-Link-b4a7abf10cdf62f9b37b.js","37e14b0b5bc44811a7f152c379603818"],["/18.docs-api-react-junctions-HistoryContext-4477d1a2c489d314141d.js","27a45b17d302fdd2b8f26f5d639ee786"],["/19.docs-api-junctions-routesMatch-5bcc644aa651552b552a.js","d13e80d5f4f1f4dfaab9433eed518bd5"],["/1dbb8572c4f6fc4bb3aac655920b5efe.png","1dbb8572c4f6fc4bb3aac655920b5efe"],["/2.docs-tutorial-770db3f13dc0ecd48616.js","f9ecb7260dc234332351bf8ac0c54331"],["/20.docs-api-junctions-locationsEqual-8f934410bcc728a7d565.js","e72a8c472c8c82241968f4eb20825766"],["/21.docs-api-junctions-createJunction-a80c939fa0e1502b7dd9.js","e4b841c2541cd34187e4c4e26a5739f6"],["/22.docs-api-junctions-createConverter-84c7fce9e426fff2cc5c.js","e198309d598af9f701a2b85547472c8c"],["/23.docs-api-junctions-Route-fef1a9bf81f1d6cde9d0.js","d6b171fea7276e3412336fa41669165a"],["/24.docs-api-junctions-Location-35c95996c2f9eb00945b.js","e7e5d1c136614fdec67c418d20dffcd4"],["/25.docs-api-junctions-Junction-b13d9f188354dbef7cce.js","d4e129d8e03230d0350c6cfab1fc9f5f"],["/26.docs-api-junctions-Converter-b18955bed01d4637f414.js","eec855cbd5a8fac7f62dac4367415ba8"],["/27.docs-api-README-b9e0aa123a75d2d2ba6a.js","1528275e020b654ef9bebaa4a0ee284e"],["/28.docs-advanced-contextual-links-13898a8671dbf5bce20a.js","ee1a81b6624bcf296179efe965ac2f37"],["/29.docs-advanced-canonical-locations-94f998d420cfe26114ee.js","b3fe3924738f34fc49b9bd2fd67bd678"],["/3.docs-introduction-three-principles-7f4c089444cb6a27eec4.js","10ab44fecbf3aad0544f5b38b5692005"],["/30.docs-Glossary-2d09f460cb3a97cb1f47.js","b9b6d28ca8a17242279d9b32ace21cdc"],["/31.README-0954216f3858a2af1768.js","aad7500cf88e2e6be3512655b31a31c0"],["/4.examples-Raw-example-b0c10998cc3cd01033dc.js","baab31670d981865f6009e4f10de936e"],["/5.examples-Basic-example-89cf1f3deae2ca82b0bd.js","8279d1a57c817efbc356ef242a6d4fe1"],["/6.examples-BaseLocation-example-55acc9bec52d73a1253a.js","5d1540cef6af24b513a9254b4a501b05"],["/63d8539be1b481ea13cd9ca3831fb00f.png","63d8539be1b481ea13cd9ca3831fb00f"],["/7.docs-introduction-motivation-9aaf7a4ddf34aaf9fb20.js","0302429df057cefa83f301267540feb5"],["/8.docs-introduction-do-i-need-a-router-d754c723b25ecc3383db.js","bff40e7642557c1434c2a42f29bc2621"],["/8ba7f97c02ca2df6a15fbd88f7e2e325.png","8ba7f97c02ca2df6a15fbd88f7e2e325"],["/9.docs-basics-the-screen-pattern-72dd2f002e66f3123dff.js","d4ab2e19eea30d419439a30996d46df9"],["/android-chrome-192x192.png","e18f6fef7794cb579582c2512df32054"],["/android-chrome-256x256.png","efde49536de1c8d93b836a521b514705"],["/api/index.html","e39a969ffc271033d6f4fdce2fbbc86b"],["/api/junctions/Converter.html","0937584a99072a4f667dcf4216028eb8"],["/api/junctions/Junction.html","d7acf3ae998b2fa1fdcd4dd5b3e2f709"],["/api/junctions/Location.html","83f71fa812825f6be9d4a8a770f3c8de"],["/api/junctions/Route.html","a4f5bcebf39e989d8f19b3eef3ac2949"],["/api/junctions/createConverter.html","5ea96787eb7220f08fca2c91e89c244b"],["/api/junctions/createJunction.html","a14e0e7cd72cdf0a3ea1ac2fc9f0a915"],["/api/junctions/index.html","897a5750ba8423f3afd2c366726facbe"],["/api/junctions/locationsEqual.html","4dcda4848e8ac802b19dde943f56679b"],["/api/junctions/routesMatch.html","11fc36189f04d382429020409f7fe7c5"],["/api/react-junctions/HistoryContext.html","b8d040c913f85067dea2ab1e9bb51556"],["/api/react-junctions/Link.html","a20158ee108c74de692b4143c5b45636"],["/api/react-junctions/Router.html","a9cf3f5dc992b14e5846a09ae5a38d31"],["/api/react-junctions/index.html","582cf1d641b6877e0ecf0adac9beba95"],["/apple-touch-icon.png","dcc1b0471dd1849f622a48faa3dd513c"],["/b8f87f8fdb4c0295e0cfd931310d74ba.png","b8f87f8fdb4c0295e0cfd931310d74ba"],["/bd55958691efe2c63307fd7b7d5a3644.png","bd55958691efe2c63307fd7b7d5a3644"],["/bfbc35eea5e663cfe6dd5726eb76a791.png","bfbc35eea5e663cfe6dd5726eb76a791"],["/entry-9b95212b9ee950a577eb.js","72876daecf82f143199659dfcb535266"],["/examples/BaseLocation.html","f9285ea0c813cc5f8e3ba401ee09347b"],["/examples/Basic.html","1874a969e16c0cb2381e770b372efbb5"],["/examples/Raw.html","91d3e89f4b3b67c3310b9cc3db157536"],["/examples/index.html","cd7d33bceb080c102eb74723d7b98d14"],["/favicon-16x16.png","bd62b4a682eef331edb5d356b85e5968"],["/favicon-32x32.png","952c40b76b2cd77038f7000175d57340"],["/guide/Glossary.html","fc2df0862b5eaeef2d907c378b76db5c"],["/guide/advanced/canonical-locations.html","e3c5fbaa18cbe23ab74f359fda395d71"],["/guide/advanced/contextual-links.html","dcf90801eba909459828d63b7a946d51"],["/guide/advanced/index.html","0984c7ce9f33d1cc03af09391225aefa"],["/guide/basics/converting-locations-to-routes.html","0942b40f25d04d2cfb974e2c4e7e378a"],["/guide/basics/example-contact-list.html","1c059d07e945654c19d78582fa1cf559"],["/guide/basics/index.html","af5fd36da764a0cf8b8e0478765c167f"],["/guide/basics/junctions.html","29f8c5a8cdd3f24a53e400118313375d"],["/guide/basics/links.html","0ce875f201db39c95ede68399abb1dd4"],["/guide/basics/locations.html","e9cce40dbc12158f52482874b218481a"],["/guide/basics/routes.html","612eb0c245c5b5940ed71ba86c7734bd"],["/guide/basics/the-screen-pattern.html","29133b93288a1986fa03be87be9ffbcd"],["/guide/index.html","0aa2a7c6bbdc157024b9c10746bc6acb"],["/guide/introduction/do-i-need-a-router.html","40471dc0afa87b46b99b6ca111274312"],["/guide/introduction/index.html","336bf110265e6097cd1cf81ed1f4f821"],["/guide/introduction/motivation.html","891583a3d66380514af676424a18604b"],["/guide/introduction/three-principles.html","f980a75edf68acf82b09981dbaa011b2"],["/guide/introduction/what-you-get-from-junctions.html","787564466782a0066c73221cb1c38632"],["/index.html","6632dbf04b85f1606434d80647729541"],["/logo.png","961b06f3b3d5f0ae5ec3180ed3ab1b47"],["/mstile-150x150.png","c8a7d0a7b404d18fdb0f3de4e633b031"],["/safari-pinned-tab.svg","9be604babe23f64093515648f24bdd78"],["/site-bundle.f5f606b3.css","f5f606b373ddb7365207693117919b47"],["/vendor-f52378ee390a69353100.js","e9a0ee479584f983d564882af41049c5"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







