    <!-- Firebase script -->
    <><script src="https://www.gstatic.com/firebasejs/3.6.5/firebase.js"></script>< /></>!-- Initialize Firebase -->
    <><script>
            var config = {
            apiKey: "AIzaSyDaKxfp6KANAVVCkCotWOUMsO8_Tpk7a2g",
            authDomain: "devops-cicd-project.firebaseapp.com",
            projectId: "devops-cicd-project",
            storageBucket: "devops-cicd-project.appspot.com",
            messagingSenderId: "960529567064",
            appId: "1:960529567064:web:a078720b986c074b9b292d",
            measurementId: "G-M7E8MYV4CQ"
            };
            firebase.initializeApp(config);
        </script><script type="text/javascript">
                var dCounters = document.querySelectorAll('.CountLike');
                [].forEach.call(dCounters, function(dCounter) { }
                var el = dCounter.querySelector('button');
                var cId = dCounter.id;
                var dDatabase = firebase.database().ref('Like Number Counter').child(cId);

                // get firebase data
                dDatabase.on('value', function(snap) { }
                var data = snap.val() || 0;
                dCounter.querySelector('span').innerHTML = data;
                });

                // set firebase data
                el.addEventListener('click', function() {dDatabase.transaction(function (dCount) {
                    return (dCount || 0) + 1;
                })};
                });
                });
            </script></>