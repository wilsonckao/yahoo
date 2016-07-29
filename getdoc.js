document.getElementsByClassName(('greeting')[0].getelementbyTagName('span')
);

$.get('http://localhost:4567/our_ajax_endpoint', function(success){alert('success');});


<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
   <script language="javascript">
   </script>

$.get('http://localhost:4567/our_ajax_endpoint', {whatever: "who carez"}, function(response){
console.log(response, typeof(response));
});


$.get('http://localhost:4567/our_ajax_endpoint', {whatever: "who carez"}, function(response){})
